import AsyncStorage from '@react-native-community/async-storage';

var globalDatabaseFunctions = {};


globalDatabaseFunctions.getCurrentKey = function() {
    return new Date() + "";
    }
    
    globalDatabaseFunctions.storeData = async function(key,value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            // Error saving data
        }
    }
    
    globalDatabaseFunctions.retrieveData = async function(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                // Our data is fetched successfully
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    }
    
    globalDatabaseFunctions.allData = async function() {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const items = await AsyncStorage.multiGet(keys)
        
            return items
        } catch (error) {
            console.log(error, "Problem")
        }
    }

    globalDatabaseFunctions.recordTest = function() {
        var key = globalDatabaseFunctions.getCurrentKey();
        console.log(key);
        var value = (Math.random() * 10) + "";
  
        //do stuff with device to do the test
  
        globalDatabaseFunctions.storeData(key, value);
      }

    globalDatabaseFunctions.getAllData = async function() {
       var data = await globalDatabaseFunctions.allData();
       console.log(data);
       return data;
    }

    globalDatabaseFunctions.clearData = function() {
        try {
          AsyncStorage.clear();
        } catch (err)
        {
          console.log("Error: " + err);
        }
      }
  

export default globalDatabaseFunctions;