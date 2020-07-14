const express = require('express');
const router = express.Router();
var mysqlClient = require("../db/connection");

router.get('/show/:id', async (req, res) => {
    let test_id = req.params.id;
    console.log(test_id);
    console.log("test_id");
    let sql = `SELECT * FROM student.mock_test where test_id ="${test_id}";`
    await mysqlClient.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

router.post('/insert', async (req, res) => {
    const { full_name, email, mobile_number, security_question, english_comprehension, logical_ability, quantitative_ability, essay_writing, automata, test_id, student_id } = req.body;
    let sql = `INSERT INTO student.mock_test (full_name, email, mobile_number, security_question, english_comprehension, logical_ability, quantitative_ability, essay_writing, automata, test_id, student_id) VALUES ('${full_name}', '${email}', ${mobile_number}, "${security_question}", ${english_comprehension}, ${logical_ability}, ${quantitative_ability}, ${essay_writing}, ${automata}, '${test_id}', '${student_id}')`;

    await mysqlClient.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.json({ status: true });
    });
});


module.exports = router;

/**
 * data to enter
 *  @param full_name              varchar(255)
 *  @param email                  varchar(255)
 *  @param mobile_number          bigint
 *  @param security_question      varchar(45)
 *  @param create_time            timestamp
 *  @param english_comprehension  int
 *  @param logical_ability        int
 *  @param quantitative_ability   int
 *  @param essay_writing          int
 *  @param automata               int
 *  @param test_id                varchar(10)       PK
 *  @param student_id             varchar(10)       UK
 *
 */

