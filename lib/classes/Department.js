class Department {
    constructor(db) {
      this.db = db;
    }

    async add({ department }) {
        try {
          const connection = await this.db();
    
          const sql = 'INSERT INTO `department` (`name`) VALUES (?)';
          const values = [department];
    
          await connection.execute(sql, values);
          console.log(`${department} department added!`);
        } catch (error) {
            console.log('Error executing SQL query:', error);
        }
      }
  
    async retrieve() {
      try {
        const connection = await this.db();
  
        const [results] = await connection.execute(
            'SELECT department.id AS department_id, department.name AS department_name FROM department'
          );
        console.table(results);
      } catch (error) {
        console.log('Error executing SQL query:', error);
      }

      const [results] = await connection.execute('SELECT * FROM department');

      return results.map(({ name, id }) => {
        return { name: name, value: id };
      });
    } catch (error) {
      console.log('Error executing SQL query:', error);
    }
  }
  
  module.exports = Department;