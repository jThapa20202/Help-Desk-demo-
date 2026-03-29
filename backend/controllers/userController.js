// Example controller
const getUsers = (req, res) => {
  // Business logic here
  res.json({ message: 'Get all users' });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Get user ${id}` });
};

module.exports = {
  getUsers,
  getUserById,
};
