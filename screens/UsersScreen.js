import React from 'react';


const UsersScreen = () => {

    const getUsers = async () => {
        try {
        const response = await fetch('users.json');
        const json = await response.json();
        setData(json.users);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
      }
    
      getUsers(() => {
        getUsers();
      }, []);

    return (
        <Text>Hu</Text>  
    );
};

UsersScreen.navigationOptions = {
    title: 'User List'
};

export default UsersScreen;