const { PrismaClient } = require('@prisma/client');
const { create } = require('domain');
const prisma = new PrismaClient();

module.exports = {
    create: async (req, res) => {
        try {
            await prisma.taste.create({
                data: {
                    name: req.body.name,
                    remark: req.body.remark,
                    foodTypeId: req.body.foodTypeId,
                    status: "use",
                },
            });
            return res.send({ message: "success" });
        } catch (e) {
            return res.status(500).send({ error: e.message });
        }
    },
    list: async (req, res) => {
        try {
            const rows = await prisma.taste.findMany({
                include: {
                    FoodType: true,
                },
                orderBy: {
                    id: "desc",
                },
                where: {
                    status: "use",
                },
            });
            return res.send({ results: rows });
        } catch (e) {
            return res.status(500).send({ error: e.message });
        }
    }
};