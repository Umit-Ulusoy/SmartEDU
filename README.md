# SmartEDU
My first Node.js project, which was build during backend development with Node.js course on Kodluyoruz.
## Getting Started
### Prerequisites
Before getting started, make sure that you have the following applications installed:
- Node.js 14.17.3 or higher,
- NPM 6.14.13 or higher and
- Git (only needed for cloning).
### Installation
Open your terminal and follow the instructions below:  
1. Clone or [download the project](https://github.com/Umit-Ulusoy/SmartEDU/archive/refs/heads/master.zip):  
`git clone https://github.com/Umit-Ulusoy/SmartEDU.git`,
2. Navigate to the folder:  
`cd SmartEDU`,
3. Install dependencies:  
`npm install`,
3. Copy config-example.js file to config.js, then open it and enter your MongoDB connection URL on the relevant line:  
module.exports =
{
    port: 80,
    MongoURL: 'Your MongoDB connection string'
}
4. Run the project:  
`node app.js`
### License:
This project is licensed under the MIT License. [Learn more about this license](https://docs.github.com/articles/licensing-a-repository).