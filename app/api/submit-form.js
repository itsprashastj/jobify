import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const filePath = path.join(process.cwd(), 'data', 'users.json');
        const fileData = fs.readFileSync(filePath);
        const json = JSON.parse(fileData);

        json.push(data);

        fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

        res.status(200).json({ message: 'Data submitted successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
