const router = require('express').Router()

router.get('/todos', (req, res) => {
    res.json({
        "message": {
            "todos": [
                {title: "Visit the dentist", day: "Sunday", priority: "High"},
                {title: "Visit the mechanic", day: "Saturday", priority: "High"},
            ]
        }
    })
})

module.exports = router;
