const { Client } = require("@notionhq/client");

export const revalidate = 60;
export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

const { NotionToMarkdown } = require("notion-to-md");
const n2m = new NotionToMarkdown({ notionClient: notionClient });

export const getAllProjectList = async () => {
  const posts = await notionClient.databases.query({
    database_id: process.env.PROJECT_DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });
  return posts.results.map((post) => {
    return getPageMetaData(post);
  });
};

export const getSingleProjectBySlug = async (slug) => {
  const content = await notionClient.databases.query({
    database_id: process.env.PROJECT_DATABASE_ID,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const metadata = getPageMetaData(content.results[0]);
  const mdblocks = await n2m.pageToMarkdown(content.results[0].id);
  const mdString = n2m.toMarkdownString(mdblocks);
  return {
    metadata,
    mdString,
  };
};

const getPageMetaData = (post) => {
  let cover = post.cover;
  if (!cover) {
    cover = config.siteImage;
  }
  switch (cover.type) {
    case "file":
      cover = post.cover.file;
      break;
    case "external":
      cover = post.cover.external.url;
      break;
    default:
      cover = config.siteImage;
  }
  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    subtitle: post.properties.Subtitle.rich_text[0].plain_text,
    tags: post.properties.Tags.multi_select,
    description: post.properties.Description.rich_text[0].plain_text,
    date: post.properties.Date.date.start,
    slug: post.properties.Slug.rich_text[0].plain_text,
    url: post.properties.Url.rich_text[0].plain_text,
    idno: post.properties.IDNo.number,
    highlight: post.properties.Highlight.checkbox,
    stack: post.properties.Stack.multi_select,
    cover: cover,
  };
};

export const getAllPosters = async () => {
  const posts = await notionClient.databases.query({
    database_id: process.env.POSTER_DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });

  const allPosts = posts.results;
  return allPosts.map((post) => {
    return getPosterMetaData(post);
  });
};

const getPosterMetaData = (post) => {
  let cover = post.cover;
  switch (cover.type) {
    case "file":
      cover = post.cover.file;
      break;
    case "external":
      cover = post.cover.external.url;
      break;
    default:
      cover = config.siteImage;
  }
  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    height: post.properties.Height.number,
    width: post.properties.Width.number,
    blururl: post.properties.Blururl.rich_text[0].plain_text,
    fullres: post.properties.FullRes.rich_text[0].plain_text,
    cover: cover,
  };
};

export const getAllLogo = async () => {
  const posts = await notionClient.databases.query({
    database_id: process.env.LOGOFOLIO_DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });

  const allLogo = posts.results;
  return allLogo.map((post) => {
    return getLogoMetaData(post);
  });
};

const getLogoMetaData = (logo) => {
  let cover = logo.cover;
  switch (cover.type) {
    case "file":
      cover = logo.cover.file;
      break;
    case "external":
      cover = logo.cover.external.url;
      break;
    default:
      cover = config.siteImage;
  }
  return {
    id: logo.id,
    title: logo.properties.Name.title[0].plain_text,
    idno: logo.properties.IDNo.number,
    width: 1500,
    height: 1500,
    cover: cover,
    fullres: logo.properties.FullRes.rich_text[0].plain_text,
  };
};

n2m.setCustomTransformer("embed", async (block) => {
  const { embed } = block;
  return `<figure>
    <iframe src="${embed?.url}" allowfullscreen style="padding-top: 12px;">
    </iframe>
  </figure>`;
});

n2m.setCustomTransformer("video", async (block) => {
  const { video } = block;
  if (video?.external?.url) {
    return `<figure><iframe src=${video?.external?.url} ></iframe></figure>`;
  } else if (video?.file?.url) {
    return `<video src="${video?.file?.url}" controls></video>`;
  } else {
    return "";
  }
});

n2m.setCustomTransformer("file", async (block) => {
  const { file } = block;
  const filename = decodeURI(
    String(file.file.url).match(/(?<=\/)[^\/\?#]+(?=[^\/]*$)/)
  );
  return `<a href="${file.file.url}" rel=“noreferrer” target="_blank">${filename}</a>`;
});
