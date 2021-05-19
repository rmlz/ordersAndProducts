/**
 * The GenericController class where other controller inherits or
 * overrides pre defined and existing properties
 */
class GenericController {
    /**
     * @param {Model} model The default model object
     * for the controller. This is required to create
     * an instance of the controller
     */
    constructor(model) {
        this._model = model
        this.store = this.store.bind(this);
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
        this.patch = this.patch.bind(this)
        this.delete = this.delete.bind(this)
    }

    /**
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @return {Object} res The response object
     */

    async store(req, res) {
        try {
            const data = await this._model.create(req.body)
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.json({error: "error"});
        }
    }

    /**
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @return {Object} res The response object
     */
    async findAll(req, res) {
        try {
            const data = await this._model.find({});
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.json({error: "error"});
        }
    }

    /**
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @return {Object} res The response object
     */
    async findById(req, res) {
        try {
            const data = await this._model.findById(req.params.id);
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.json({error: e});
        }
    }
    /**
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @return {Object} res The response object
     */
    async patch(req, res) {
        try {
            const bodyData = req.body;
            const id = req.params.id;
            console.log(id, bodyData)
            const data = await this._model.findByIdAndUpdate(id, bodyData, {new: true});
            return res.json(
                {
                    msg: 'data updated',
                    data: data
                })
        } catch (e) {
            console.log(e)
            return res.json({error: e});
        }
    }
    /**
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @return {Object} res The response object
     */
    async delete(req, res) {
        try {
            const id = req.params.id;
            const deleteData = await this._model.findByIdAndRemove(id)
            return res.json(
                {
                    msg: 'delete success',
                    data: deleteData
                })
        } catch (e) {
            console.log(e)
            return res.json({error: e})
        }
    }
}
module.exports = GenericController;
