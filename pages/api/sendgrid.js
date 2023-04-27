import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: 'info@narativ.cz', // Your email where you'll receive emails
            from: 'info@narativ.cz', // your website email address here
            subject: `[Zpráva z webu Narativ.cz] : ${req.body.subject}`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
              <p>Nová zpráva z webu Narativ.cz od: ${req.body.fullname}</p>
              <p>Email: ${req.body.email}</p>
              <p>Text zprávy:</p>
              <p>${req.body.message}</p>
      </body>
      </html>`,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: '' });
}

export default sendEmail;
