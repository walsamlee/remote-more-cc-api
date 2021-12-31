import data from './utils/users.json';

const Users = (req, res) => {
  try {
    const userData = data;
  
    return res.status(200).json(
      {
        data: userData
      }
    );

  } catch (error) {
    return res.status(400).json(
      {
        message: 'User not found!',
        data: {}
      }
    );
  }
}

const User = (req, res) => {
  const { username } = req.params;

  let userData = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    
    if (element.owner.login === username) {
      userData.push(element);
    }
  }

  return res.status(200).json(
    {
      data: userData
    }
  );
}

const Response = {
  Users,
  User
}

export default Response;