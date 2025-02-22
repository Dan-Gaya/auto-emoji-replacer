const integrationSpecSetting = require('../integration-config')

exports.integrateSpec = (req,res)=>{
    res.json(integrationSpecSetting); 

}