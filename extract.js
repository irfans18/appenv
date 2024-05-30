const fs = require('fs');

// Function to extract placeholders from application.properties
function extractPlaceholders(propertiesPath, envPath) {
  // Read properties file
  const propertiesContent = fs.readFileSync(propertiesPath, 'utf8');
  
  // Split content into lines
  const lines = propertiesContent.split('\n');

  // Prepare the .env content
  let envContent = '';
  const regex = /\$\{([^\}]+)\}/g;
  const placeholders = new Set();
  
  // Process each line
  lines.forEach(line => {
    // Ignore lines that start with '#'
    if (line.trim().startsWith('#')) {
      return;
    }

    // Find all placeholders in the line
    let match;
    while ((match = regex.exec(line)) !== null) {
      // Extract the value before the colon, if present
      const placeholder = match[1].split(':')[0];
      placeholders.add(placeholder);
    }
  });

  // Create .env content from placeholders
  placeholders.forEach(placeholder => {
    envContent += `${placeholder}=\n`;
  });

  // Write the .env content to the output file
  fs.writeFileSync(envPath, envContent);
  console.log(`Extraction completed: ${envPath}`);
}

// Define the input and output file paths
const propertiesFilePath = 'source/application.properties';
const envFilePath = 'output/.env.example';

// Call the extraction function
extractPlaceholders(propertiesFilePath, envFilePath);
