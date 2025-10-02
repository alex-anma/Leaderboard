import type { GlobalThemeOverrides } from 'naive-ui'

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily: "'Inter', sans-serif",

    // --- Colores Base (Se mantienen) ---
    primaryColor: '#30ABA9',
    primaryColorHover: '#3CC1BF',
    primaryColorPressed: '#2A9A98',
    primaryColorSuppl: '#30ABA9',

    // --- Colores de Texto (Invertidos a oscuros) ---
    textColorBase: '#0F172A', // Texto principal (antes era el fondo)
    textColor1: '#334155', // Variante de texto principal
    textColor2: '#64748B', // Texto secundario
    textColor3: '#94A3B8', // Texto terciario (para hints, placeholders, etc.)

    // --- Otros Colores (Invertidos a claros) ---
    bodyColor: '#F1F5F9', // Fondo principal de la aplicación (gris muy claro)
    cardColor: '#FFFFFF', // Color de fondo para tarjetas y listas (blanco puro)
    borderColor: '#E2E8F0', // Borde sutil para divisores y componentes
  },
  // Button
  Button: {
    borderRadiusMedium: '12px',
    heightMedium: '44px',
    paddingMedium: '10px 24px',
    fontSizeMedium: '16px',
    fontWeight: '500',
    // El color del texto en el botón primario sigue siendo blanco para contraste
    textColorPrimary: '#FFFFFF',
    textColorHoverPrimary: '#FFFFFF',
    textColorPressedPrimary: '#FFFFFF',
    textColorFocusPrimary: '#FFFFFF',
  },
  // Input (ajustado para tema claro)
  Input: {
    color: '#FFFFFF', // Fondo del input
    colorFocus: '#FFFFFF',
    border: '1px solid #CBD5E1',
    borderHover: '1px solid #30ABA9',
    borderFocus: '1px solid #30ABA9',
    boxShadowFocus: '0 0 0 2px rgba(48, 171, 169, 0.2)',
    textColor: '#334155', // Color del texto dentro del input
    borderRadius: '6px',
    fontSizeMedium: '16px',
    heightMedium: '42px',
  },
  // Card (ajustado para tema claro)
  Card: {
    borderRadius: '16px',
    paddingMedium: '24px',
    titleTextColor: '#0F172A', // Título oscuro sobre fondo claro
    titleFontSizeMedium: '1.25rem',
    titleFontWeight: '600',
    color: '#FFFFFF', // Fondo de la tarjeta
    borderColor: '#30ABA9', // Borde claro
  },
  // List (ajustado para tema claro)
  List: {
    color: '#FFFFFF', // Fondo de la lista
    borderColor: '#E2E8F0', // Borde de los items
    textColor: '#0F172A', // Color de texto
  },
  // Tag (ajustado para tema claro)
  Tag: {
    borderRadius: '50%',
    color: 'transparent',
    textColor: '#64748B', // Texto del tag
    border: '1px solid #CBD5E1', // Borde del tag
    heightMedium: '32px',
  },
  // Statistic (ajustado para tema claro)
  Statistic: {
    labelFontSize: '0.875rem',
    labelTextColor: '#64748B', // Etiqueta del statistic
    valueTextColor: '#0F172A', // Valor principal oscuro
    valueFontSize: '1.25rem',
    valueFontWeight: '600',
  },
  // Avatar
  Avatar: {
    borderRadius: '25%',
  },
  // Icons
  Icon: {
    color: '#30ABA9', // Mantenemos el color primario para los iconos
  },
}
