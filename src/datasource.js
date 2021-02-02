import pkg from "apollo-datasource-rest";
const { RESTDataSource } = pkg;

export class Jokenorris extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes";
  }
  jokereducer(joke) {
    return { value: joke.value, id: joke.id, icon: joke.icon_url };
  }

  async getAllCategories() {
    const res = await this.get("categories");
    return res;
  }

  async getRandomJoke({ category }) {
    const response = await this.get("random", { category: category });
    return this.jokereducer(response);
  }
}
