import request from "supertest";
import app from "../app";

describe("API tests", () => {
    it('should return corresponding songs', async () => {
        const searchedSong = "Pain"

        const res = await request(app).get(`/${searchedSong}`)

        expect(res.status).toBe(200)
        expect(res.body).toEqual({
            songs: ["Pain Is So Close to Pleasure"]
        })
    });

    it('should return empty array when not exist', async () => {
        const searchedSong = "sczubdczdncoeifnefkvfn"

        const res = await request(app).get(`/${searchedSong}`)

        expect(res.status).toBe(200)
        expect(res.body).toEqual({
            songs: []
        })
    });

    it('should return 404 error', async () => {
        const searchedSong = ""

        const res = await request(app).get(`/${searchedSong}`)

        expect(res.status).toBe(404)
        expect(res.body).toEqual({})
    });
})
