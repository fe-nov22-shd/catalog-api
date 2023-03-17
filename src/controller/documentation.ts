import { Request, Response } from 'express';
import fs from "fs";

export const getDocumentationPage = async (req: Request, res: Response) => {
    fs.readFile('src/docuPage.html', (error, data) => {
        if (!error) {
            res.end(data);

            return;
        }

        res.statusCode = 404;
        res.end();
    });
}
