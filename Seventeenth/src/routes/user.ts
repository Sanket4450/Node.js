import express from 'express'
import prisma from '../config/config'
import sendReponse from '../utils/sendResponse'
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany()

        sendReponse(
            res,
            200,
            { users },
            "Users got successfully"
        )
    } catch (error) {
        console.log(error)
        res.status(400).send('Error occured!')
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: parseInt(req.params.id)
            }
        })

        if (!user) throw new Error('User not found for this id')

        sendReponse(
            res,
            200,
            { user },
            'User got successfully'
        )
    } catch (error) {
        console.log(error)
        res.status(400).send('Error occured!')
    }
})

router.post('/', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: req.body
        })

        sendReponse(
            res,
            200,
            { user },
            'User created successfully'
        )
    } catch (error) {
        console.log(error)
        res.status(400).send('Error occured!')
    }
})

router.put('/:id', async (req, res) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })

        sendReponse(
            res,
            200,
            { user },
            'User updated successfully'
        )
    } catch (error) {
        console.log(error)
        res.status(400).send('Error occured!')
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })

        sendReponse(
            res,
            200,
            { user },
            'User deleted successfully'
        )
    } catch (error) {
        console.log(error)
        res.status(400).send('Error occured!')
    }
})

export default router
