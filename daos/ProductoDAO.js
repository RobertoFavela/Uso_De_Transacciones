import { pool } from '../db.js';

export class ProductoDAO {
    static async crear(producto) {
        const sql = 'INSERT INTO Producto (nombre, precio, cantidad) VALUES (?, ?, ?)';
        const params = [producto.nombre, producto.precio, producto.cantidad];
        const [result] = await pool.execute(sql, params);
        return result.insertId;
    }

    static async obtenerTodos() {
        const [rows] = await pool.execute('SELECT * FROM Producto');
        return rows;
    }

    static async obtenerPorId(id) {
        const [rows] = await pool.execute('SELECT * FROM Producto WHERE id = ?', [id]);
        return rows[0];
    }

    static async actualizar(id, producto) {
        const sql = 'UPDATE Producto SET nombre = ?, precio = ?, cantidad = ? WHERE id = ?';
        const params = [producto.nombre, producto.precio, producto.cantidad, id];
        await pool.execute(sql, params);
    }

    static async eliminar(id) {
        await pool.execute('DELETE FROM Producto WHERE id = ?', [id]);
        return result.affectedRows;
    }
}