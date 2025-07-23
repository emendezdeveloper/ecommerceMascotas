<template>
  <div class="carrito-panel">
    <button class="close-btn" @click="$emit('close')">✖</button>
    <h2>Carrito</h2>
    <div v-if="carrito.items.length > 0">
      <ul>
        <li v-for="item in carrito.items" :key="`${item.tipo}-${item.id}`" class="carrito-item">
          <div class="carrito-img">
            <template v-if="item.imagen">
              <img :src="item.imagen" :alt="item.nombre" />
            </template>
            <template v-else>
              <div class="placeholder-img"><span class="placeholder-x">✖</span></div>
            </template>
          </div>
          <div class="carrito-info">
            <div class="carrito-nombre">{{ item.nombre }}</div>
            <div class="carrito-precio">Precio: ${{ item.precio }}</div>
            <div class="carrito-cantidad">Cantidad: {{ item.cantidad }}</div>
            <div class="carrito-subtotal">Subtotal: ${{ item.precio * item.cantidad }}</div>
          </div>
          <button class="remove-btn" @click="carrito.eliminarItem(item.id, item.tipo)">❌</button>
        </li>
      </ul>
      <div class="carrito-total">
        <strong>Total: ${{ totalCarrito }}</strong>
      </div>
      <button class="vaciar-btn" @click="carrito.vaciarCarrito">Vaciar carrito</button>
    </div>
    <p v-else class="empty-message">Aún no has agregado el producto.</p>
  </div>
</template>

<script setup>
import { useCarritoStore } from '../store/carrito'
import { computed } from 'vue'

const carrito = useCarritoStore()

const totalCarrito = computed(() =>
  carrito.items.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
)
</script>

<style scoped>
.carrito-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 370px;
  height: 100vh;
  background: #fff;
  box-shadow: -2px 0 12px rgba(0,0,0,0.08);
  z-index: 1000;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  overflow-y: auto;
  transition: right 0.3s;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.empty-message {
  color: #1e40af;
  font-weight: bold;
  margin-top: 2rem;
  text-align: center;
}
.carrito-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
  gap: 1rem;
}
.carrito-img img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  background: #e5e7eb;
}
.placeholder-img {
  width: 60px;
  height: 60px;
  background: #e5e7eb;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.placeholder-x {
  font-size: 2rem;
  color: #9ca3af;
  font-weight: bold;
}
.carrito-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.carrito-nombre {
  font-weight: bold;
  color: #1e40af;
}
.carrito-precio,
.carrito-cantidad,
.carrito-subtotal {
  font-size: 0.95rem;
  color: #374151;
}
.remove-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #ef4444;
}
.carrito-total {
  text-align: right;
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #1e40af;
}
.vaciar-btn {
  margin-top: 1rem;
  background: #ef4444;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
}
</style>