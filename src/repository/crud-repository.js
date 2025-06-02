class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async createAll(data) {
    try {
      const response = await this.model.bulkCreate(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findByPk(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getAll(data) {
    try {
      const response = await this.model.findAll(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.model.destroy({ where: { id } });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CrudRepository;