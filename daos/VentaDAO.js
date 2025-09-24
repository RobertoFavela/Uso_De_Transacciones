import { pool } from '../db.js';

export class VentaDAO {
    static async crear(venta) {
        const sql = 'INSERT INTO Ventas (total, iva) VALUES (?, ?)';
        const params = [venta.total, venta.iva];
        const [result] = await pool.execute(sql, params);
        return result.insertId;
    }

    static async obtenerTodos() {
        const [rows] = await pool.execute('SELECT * FROM Ventas');
        return rows;
    }

    static async obtenerPorId(id) {
        const [rows] = await pool.execute('SELECT * FROM Ventas WHERE id = ?', [id]);
        return rows;
    }

    static async actualizar(id, venta) {
        const sql = 'UPDATE Ventas SET total = ?, iva = ? WHERE id = ?';
        const params = [venta.total, venta.iva, id];
        await pool.execute(sql, params);
    }

    static async eliminar(id) {
        const [result] = await pool.execute('DELETE FROM Ventas WHERE id = ?', [id]);
        return result.affectedRows;
    }
}