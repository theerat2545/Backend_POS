const { PrismaClient } = require('@prisma/client');
const { create } = require('domain');
const prisma = new PrismaClient();

module.exports = {
    create: async (req, res) => {
        try {
            await prisma.foodSize.create({
                data: {
                    name: req.body.name,
                    foodTypeId: req.body.foodTypeId,
                    moneyAdded: req.body.price,
                    remark: req.body.remark,
                },
            });
            return res.send({ message: "success" })
        } catch (e) {
            return res.status(500).send({ error: e.message })
        }
    },
    list: async (req, res) => {
        try {
            const rows = await prisma.foodSize.findMany({
                orderBy: {
                    id: 'desc',
                },
            });
            return res.send({ results: rows});
        } catch (e) {
            return res.status(500).send({ error: e.message })
        }
    }
}