const crypto = require('crypto');

const generateKey = () => {
  return crypto.randomBytes(48).toString('hex');
};

const localKey = generateKey();
console.log('Generated Local Key:', localKey);
