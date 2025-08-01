<template>
  <!-- ESPACIO PARA HEADER FIJO -->
    <div class="pt-[170px]">
      <!-- Banner -->
      <section class="flex justify-center items-center w-full min-h-[180px] bg-white">
        <img src="/banner.png" alt="Banner Mascotas" class="w-full max-w-full h-auto object-cover rounded-none block" />
      </section>
      <!-- Filtros y selección -->
      <section class="bg-blue-100 px-8 py-6 flex flex-col gap-4 items-start w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] box-border">
        <div>
          <span>Servicios para:</span>
          <button class="bg-blue-900 text-white rounded px-4 py-2 font-bold mr-4">Perros 🐶</button>
          <button class="bg-blue-500 text-white rounded px-4 py-2 font-bold">Gatos 🐱</button>
        </div>
        <div class="flex gap-4 mt-2 flex-wrap">
          <button class="bg-white border border-blue-200 rounded px-4 py-2 text-blue-900 font-bold">Alimento</button>
          <button class="bg-white border border-blue-200 rounded px-4 py-2 text-blue-900 font-bold">Concentrado</button>
          <button class="bg-white border border-blue-200 rounded px-4 py-2 text-blue-900 font-bold">Seleccione una marca</button>
          <button class="bg-white border border-blue-200 rounded px-4 py-2 text-blue-900 font-bold">Limpiar</button>
          <button class="bg-white border border-blue-200 rounded px-4 py-2 text-blue-900 font-bold">Filtrar Por ▼</button>
          <button class="bg-white border border-blue-200 rounded px-4 py-2 text-blue-900 font-bold">Ordenar Por ▼</button>
        </div>
      </section>
    </div>
  <div class="main-bg">
    <!-- Cards de servicios/productos -->
    <!-- <section class="main-cards">
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
    </section> -->
<section class="p-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div
      v-for="servicio in services"
      :key="servicio.id"
      class="bg-white rounded-xl shadow flex flex-col items-center min-h-[370px] max-w-xs mx-auto p-6"
    >
      <div class="bg-blue-200 text-blue-900 flex items-center justify-center rounded-xl w-24 h-24 mb-4 text-4xl">
        <span class="emoji">{{ servicio.image }}</span>
      </div>
      <span class="text-xs bg-blue-100 text-blue-900 px-2 py-1 rounded-full mb-2 font-semibold">{{ servicio.category.toUpperCase() }}</span>
      <h4 class="text-blue-900 font-bold text-center mb-2 h-12 flex items-center justify-center text-lg w-full truncate">
        {{ servicio.nombre }}
      </h4>
      <p class="text-gray-700 mb-2 text-center min-h-[48px] flex items-center justify-center">{{ servicio.descripcion }}</p>
      <div class="mb-2 text-center">
        <span class="font-bold text-blue-500 text-lg">$ {{ servicio.price.toLocaleString('es-CO') }}</span>
      </div>
      <div class="flex-1"></div>
      <div class="flex gap-2 w-full mt-4">
        <button @click="scheduleService(servicio.id)" class="bg-white border border-blue-200 text-blue-900 font-bold py-2 px-4 rounded w-1/2 hover:bg-blue-50 transition">📅 Agendar</button>
        <button @click="agregarAlCarrito(servicio)" class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 transition">Agregar</button>
      </div>
    </div>
  </div>
</section>
    <!-- Footer -->
    <!-- <footer class="footer">
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
    </footer> -->
<footer class="bg-blue-600 text-blue-50 py-8 mt-8">
  <div class="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
    <div>
      <h4 class="text-xl font-bold mb-2">PetMarket</h4>
      <p class="text-blue-100">El mejor cuidado para tu mascota</p>
    </div>
    <div>
      <h4 class="text-xl font-bold mb-2">Servicios</h4>
      <ul class="space-y-1">
        <li><a href="#" class="hover:underline text-blue-50">Baño</a></li>
        <li><a href="#" class="hover:underline text-blue-50">Corte</a></li>
        <li><a href="#" class="hover:underline text-blue-50">Veterinaria</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-xl font-bold mb-2">Contacto</h4>
      <p class="text-blue-100">info@petmarket.com</p>
      <p class="text-blue-100">+57 300 123 4567</p>
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

<!-- <style scoped>
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
</style> -->