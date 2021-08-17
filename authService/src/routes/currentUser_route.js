const express = require('express')

const app = express();

const router = express.Router();

const cors = require('cors');
router.use(express.json());
router.use(cors());


router.get('/api/users/currentUser', (req,res) => {
    res.send('CurrentUSer !!!');
    
});

module.exports = router;