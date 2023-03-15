class MongoCRUD {

    constructor(model) {
        this.model = model;
    }

    /**
     * @return entity model.
     */
    getModel() {
        return this.model;
    }

    /**
     * Create a new entity.
     * @param {Object} userData
     */
    async create(data) {
        try{
            return this.model.create(data);
        }catch(err){
            throw err
        }

    }

    /**
     * Find entity by ID.
     * @param {Number} id
     */
    async findById(id) {
        return this.model.findById(id);
    }

    /**
     * Find all records
     */
    findAll(params) {
        return this.model.find(params);
    }

    /**
     * Update a entity looking for it by id
     * @param {String} id mongodb id
     * @param {Object} toUpdate data to update
     */
    update(id, toUpdate) {
        return this.model.findByIdAndUpdate(id, toUpdate, {
            new: true
        });
    }

    /**
     * Delete a entity looking for it by id
     * @param {String} id mongodb id
     */
    remove(id) {
        return this.model.findByIdAndDelete(id);
    }

    /**
     * return a entity looking for it by an object
     * @param {object} objectSearch mongodb data
     */
    getOneBy(objectSearch) {
        return this.model.findOne(objectSearch);
    }
}

module.exports = MongoCRUD;