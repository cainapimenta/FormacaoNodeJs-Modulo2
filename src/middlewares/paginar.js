import RequisitionError from "../errors/RequisitionError.js";

async function paginar(req, res, next) {
    try {
        let { limite = 10, pagina = 1, orderBy = "_id:-1" } = req.query;

        let [fieldOrder, order] = orderBy.split(":");

        limite = parseInt(limite);
        pagina = parseInt(pagina);
        order = parseInt(order);

        const result = req.result;

        if (limite > 0 && pagina > 0) {
            const entites = await result.find({})
                .sort({ [fieldOrder]: order })
                .skip((pagina - 1) * limite)
                .limit(limite)
                .exec();

            res.status(200).json(entites);
        } else {
            next(new RequisitionError());
        }
    } catch (error) {
        next(error);
    }
}

export default paginar;