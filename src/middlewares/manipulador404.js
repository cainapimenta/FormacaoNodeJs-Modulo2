import NotFound from "../errors/NotFound.js";

function manipulador404(req, res, next) {
    const error404 = new NotFound();
    next(error404);
}

export default manipulador404;