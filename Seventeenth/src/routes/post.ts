import express from 'express'
import prisma from '../config/config'
import sendReponse from '../utils/sendResponse'
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const posts = await prisma.post.findMany()

        sendReponse(
            res,
            200,
            { posts },
            "posts got successfully"
        )
    } catch (error) {
        console.log(error)
        res.status(400).send('Error occured!')
    }
})

router.get('/:id', async (req, res) => {
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: parseInt(req.params.id)
            }
        })

        if (!post) throw new Error('post not found for this id')

        sendReponse(
            res,
            200,
            { post },
            'post got successfully'
        )
    } catch (error) {
        console.log(error)
        res.status(400).send('Error occured!')
    }
})

router.post('/', async (req, res) => {
    try {
        const post = await prisma.post.create({
            data: req.body
        })

        sendReponse(
            res,
            200,
            { post },
            'post created successfully'
        )
    } catch (error) {
        console.log(error)
        res.status(400).send('Error occured!')
    }
})

router.put('/:id', async (req, res) => {
    try {
        const post = await prisma.post.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })

        sendReponse(
            res,
            200,
            { post },
            'post updated successfully'
        )
    } catch (error) {
        console.log(error)
        res.status(400).send('Error occured!')
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const post = await prisma.post.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })

        sendReponse(
            res,
            200,
            { post },
            'post deleted successfully'
        )
    } catch (error) {
        console.log(error)
        res.status(400).send('Error occured!')
    }
})

export default router
