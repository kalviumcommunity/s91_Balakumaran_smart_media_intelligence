import api from "./api";

export const getArticles = async () => {
  const response = await api.get("/articles");

  return response.data;
};

export const getArticleById = async (id) => {
  const response = await api.get(`/articles/${id}`);

  return response.data;
};

export const createArticle = async (articleData) => {
  const response = await api.post(
    "/articles",
    articleData
  );

  return response.data;
};

export const updateArticle = async (
  id,
  articleData
) => {
  const response = await api.put(
    `/articles/${id}`,
    articleData
  );

  return response.data;
};

export const deleteArticle = async (id) => {
  const response = await api.delete(
    `/articles/${id}`
  );

  return response.data;
};