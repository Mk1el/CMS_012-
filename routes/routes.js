import express from 'express';
import { Register,Login, Auth } from '../controller/userController.js';
import { body } from 'express-validator';
import { VerifyUser } from '../middleware/VerifyUser.js';
import { createContact, getContacts, getContact, updateContact, deleteContact} from '../controller/contactController.js';

const router = express.Router();

router.post('/register', [
  body('name').trim().notEmpty().withMessage("Name should not be empty!"),
  body('email').trim().notEmpty().withMessage("Email should not be empty")
    .isEmail().withMessage("Invalid Email!!!"),
  body('password').trim().notEmpty().withMessage("Password should not be empty")
    .isLength({ min: 5, max: 30 }).withMessage("Password length should be 5-30")
], Register);
router.post('/login',[
  body('email').trim().notEmpty().withMessage("Email should not be empty")
  .isEmail().withMessage("Invalid email!!"),
  body('password').trim().notEmpty().withMessage("Password should not be empty")
  .isLength({min: 5, max: 30}).withMessage("Password length should be 5-30 characters")
], Login);

router.post('/add-contact',VerifyUser,createContact)
router.get('/verify', VerifyUser, Auth)
router.get('/contacts',VerifyUser, getContacts)
router.put('/update-contact/:id', VerifyUser, updateContact)
router.delete('/contact/:id', VerifyUser,deleteContact)
export { router as Router };
