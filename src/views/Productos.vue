<template>
  <div class="productos-page">
    <h1>Productos para tu mascota</h1>
    <div class="productos-list">
      <div
        class="producto-card"
        v-for="producto in productos"
        :key="producto.id"
      >
        <img :src="producto.imagen" :alt="producto.nombre" class="producto-img" />
        <h3>{{ producto.nombre }}</h3>
        <p>{{ producto.descripcion }}</p>
        <p><strong>Precio:</strong> ${{ producto.precio }}</p>
        <button @click="agregarAlCarrito(producto)">Agregar al carrito</button>
        <router-link :to="`/detalle/producto/${producto.id}`">Ver detalle</router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useCarritoStore } from '../store/carrito'
const productos = ref([
  {
    id: 1,
    nombre: 'Concentrado para perro - Adulto',
    descripcion: 'Saco de 10kg con nutrientes para perros adultos.',
    precio: 90000,
    imagen: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    nombre: 'Vitaminas para gatos',
    descripcion: 'Frasco con 30 tabletas de suplemento vitamínico.',
    precio: 35000,
    imagen: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    nombre: 'Antipulgas en spray',
    descripcion: 'Producto dermatológicamente probado, seguro para cachorros.',
    precio: 42000,
    imagen: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80'
  },
])
// Importamos el store de carrito
// y definimos la función para agregar productos al carrito
const carrito = useCarritoStore()
const agregarAlCarrito = (producto) => {
  const existente = carrito.items.find(item => item.id === producto.id)
  if (existente) {
    existente.cantidad += 1
  } else {
    carrito.items.push({ ...producto, cantidad: 1 })
  }
}
</script>
<style scoped>
.productos-page {
  background: #e3f0ff;
  min-height: 100vh;
  padding: 2rem;
}
.producto-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}

h1 {
  color: #1e40af;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
}

.productos-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.producto-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 260px;
}

.producto-card h3 {
  color: #1e40af;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.producto-card p {
  margin-bottom: 0.5rem;
  color: #374151;
}

.producto-card strong {
  color: #3b82f6;
}

button {
  margin-top: 1rem;
  background: #3b82f6;
  color: #fff;
  border: none;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
}

button:hover {
  background: #1e40af;
}

.router-link {
  margin-top: 0.75rem;
  display: inline-block;
  color: #3b82f6;
  background: #e3f0ff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  border: 1px solid #b3dafe;
  transition: background 0.2s;
}

.router-link:hover {
  background: #b3dafe;
  color: #1e40af;
}
</style>