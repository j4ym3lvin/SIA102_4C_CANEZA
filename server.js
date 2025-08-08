const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
        }

        .box {
            width: 500px;
            padding: 20px;
            background-color: white;
            text-align: center;
            border-radius: 10px;
            box-shadow: 0 4px 10px black;
            font-family: Arial, sans-serif;
        }

        h1 {
            color: red;
            font-size: 24px;
        }

        p {
            color: #333;
            font-size: 15px;
            line-height: 1.5;
        }

    </style>
</head>
<body>
    <div class="box">
        <h1>Server Under Maintenance</h1>
        <p>We are currently performing system maintenance. Please check back later.</p>
        <p>Thank you for your patience!</p>
    </div>
</body>
</html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
