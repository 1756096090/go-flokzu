const WebhookData = require('../models/webhook');

exports.handleWebhook = async (req, res) => {
    try {
        const webhookData = new WebhookData({
            data: req.body
        });
        await webhookData.save();
        res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Webhook processing error:', error);
        res.status(500).json({ error: 'Error processing webhook' });
    }
};