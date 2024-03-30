// Create a class named DevScriptor
class DevScriptor {
    constructor() {
        this.scripts = [];
    }

    // Method: add a script to the DevScriptor's collection
    addScript(script) {
        this.scripts.push(script);
        console.log(`Added script "${script}" to the DevScriptor's collection.`);
    }

    // Method: remove a script from the DevScriptor's collection
    removeScript(script) {
        const index = this.scripts.indexOf(script);
        if (index !== -1) {
            this.scripts.splice(index, 1);
            console.log(`Removed script "${script}" from the DevScriptor's collection.`);
        } else {
            console.log(`Script "${script}" is not found in the DevScriptor's collection.`);
        }
    }

    // Method: list all scripts in the DevScriptor's collection
    listScripts() {
        console.log("Scripts in the DevScriptor's collection:");
        this.scripts.forEach(script => {
            console.log(script);
        });
    }
}

// Create an instance of DevScriptor named myDevScriptor
const myDevScriptor = new DevScriptor();

// Add scripts to the DevScriptor's collection
myDevScriptor.addScript("Script 1");
myDevScriptor.addScript("Script 2");
myDevScriptor.addScript("Script 3");

// List all scripts in the DevScriptor's collection
myDevScriptor.listScripts();

// Remove a script from the DevScriptor's collection
myDevScriptor.removeScript("Script 2");

// List all scripts in the DevScriptor's collection after removal
myDevScriptor.listScripts();
