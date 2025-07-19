<template>
  <div class="main-bg">
    <!-- Cards de servicios/productos -->
    <section class="main-cards">
      <div class="cards">
        <div v-for="servicio in services" :key="servicio.id" class="card">
          <div class="card-image">
            <span class="emoji">{{ servicio.image }}</span>
          </div>
          <div class="card-content">
            <span class="badge">{{ servicio.category.toUpperCase() }}</span>
            <h4>{{ servicio.nombre }}</h4>
            <p>{{ servicio.descripcion }}</p>
            <div class="card-footer">
              <span class="price">$ {{ servicio.price.toLocaleString('es-CO') }}</span>
              <div class="buttons">
                <button @click="scheduleService(servicio.id)">📅 Agendar</button>
                <button class="primary" @click="agregarAlCarrito(servicio)">Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div>
          <h4>PetMarket</h4>
          <p>El mejor cuidado para tu mascota</p>
        </div>
        <div>
          <h4>Servicios</h4>
          <ul>
            <li><a href="#">Baño</a></li>
            <li><a href="#">Corte</a></li>
            <li><a href="#">Veterinaria</a></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <p>info@petmarket.com</p>
          <p>+57 300 123 4567</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCarritoStore } from '../store/carrito'
const carrito = useCarritoStore()
const agregarAlCarrito = (servicio) => {
  carrito.agregarItem({ ...servicio, tipo: 'servicio' })
}
const services = ref([
  { id: 1, nombre: 'Baño para Mascotas', descripcion: 'Servicio completo de baño con productos hipoalergénicos.', price: 35000, image: '🛁', category: 'Cuidado' },
  { id: 2, nombre: 'Corte de Cabello', descripcion: 'Estilizado profesional para tu mascota.', price: 40000, image: '✂️', category: 'Estética' },
  { id: 3, nombre: 'Consulta Veterinaria', descripcion: 'Chequeo completo de salud para tu mascota.', price: 50000, image: '🩺', category: 'Salud' },
  { id: 4, nombre: 'Vacunación', descripcion: 'Aplicación de vacunas según calendario.', price: 25000, image: '💉', category: 'Salud' },
  { id: 5, nombre: 'Guardería', descripcion: 'Cuidado diario para tu mascota mientras trabajas.', price: 30000, image: '🏠', category: 'Cuidado' },
  { id: 6, nombre: 'Entrenamiento', descripcion: 'Sesiones de entrenamiento básico y avanzado.', price: 45000, image: '🎾', category: 'Educación' },
])
const scheduleService = (id) => {
  console.log(`Servicio ${id} agendado`)
}
</script>

<style scoped>
.main-bg {
  background: #e3f0ff; /* azul claro */
  min-height: 100vh;
}
.cart-btn {
  background: #e3f0ff;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.main-cards {
  padding: 2rem;
}
.cards {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  min-height: 370px;
  width: 100%;
}
.card-image {
  background: #b3dafe;
  color: #1e40af;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.emoji {
  font-size: 2rem;
}
.heart {
  position: absolute;
  top: 8px;
  right: 8px;
  background: white;
  border: none;
  border-radius: 50%;
  padding: 4px;
}
.card-content {
  padding: 1rem;
  flex-grow: 1;
}
.badge {
  font-size: 10px;
  background: #e3f0ff;
  color: #1e40af;
  padding: 2px 6px;
  border-radius: 12px;
  margin-bottom: 5px;
  display: inline-block;
}
.card-footer {
  margin-top: 1rem;
}
.price {
  font-weight: bold;
  color: #3b82f6;
}
.buttons {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 0.5rem;
}
button {
  padding: 6px 12px;
  border: 1px solid #b3dafe;
  background: white;
  cursor: pointer;
  border-radius: 4px;
}
button.primary {
  background: #3b82f6;
  color: #fff;
  border: none;
}
.footer {
  background: #3b82f6;
  color: #e3f0ff;
  padding: 2rem;
  margin-top: 2rem;
}
.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
}
.footer a {
  color: #e3f0ff;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
</style>