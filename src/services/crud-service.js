class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      return await this.repository.create(data);
    } catch (error) {
      throw error;
    }
  }

  async get(id) {
    try {
      return await this.repository.get(id);
    } catch (error) {
      throw error;
    }
  }

  async destroy(id) {
    try {
      this.repository.destroy(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CrudService;
