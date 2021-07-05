class HealthController {

    static healthCheck(req, res) {
        res.status(200).send("Health is up");
    }
}
module.exports = HealthController;