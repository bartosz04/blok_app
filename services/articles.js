import { getList, getFileBySlug } from "lib/markdownParser";

export const getListOfArticles = () => {
    const articles = getList('articles');

    return articles.sort((a, b) => a.createdAt - b.createdAt).reverse();
};

export const getArticle = async (slug) => {
    const article = await getFileBySlug('_articles', slug);

    return articles;
};