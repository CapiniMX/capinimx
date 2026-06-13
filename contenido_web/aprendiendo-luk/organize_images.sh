#!/bin/bash

# 📁 Script de organización de imágenes - AprendiendoLuk
# Organiza las 17 imágenes descargadas en sus respectivas carpetas

BASE_DIR="$HOME/clawd/repos/capinimx/contenido_web/aprendiendo-luk"
DOWNLOADS="$HOME/Downloads"

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  📁 ORGANIZANDO IMÁGENES - AprendiendoLuk                      ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Crear carpetas si no existen
echo "✏️  Creando estructura de carpetas..."
mkdir -p "$BASE_DIR/images/screenshots"
mkdir -p "$BASE_DIR/images/mockups"
mkdir -p "$BASE_DIR/images/assets"
mkdir -p "$BASE_DIR/images/website"
mkdir -p "$BASE_DIR/images/infographics"
mkdir -p "$BASE_DIR/images/social_media"

echo "✅ Carpetas creadas"
echo ""

# Función para mover con validación
move_files() {
  local pattern=$1
  local dest=$2
  local category=$3

  local count=$(ls -1 "$DOWNLOADS"/$pattern 2>/dev/null | wc -l)

  if [ $count -gt 0 ]; then
    echo "📂 $category:"
    mv "$DOWNLOADS"/$pattern "$dest/" 2>/dev/null
    for file in "$DOWNLOADS"/$pattern; do
      if [ -f "$file" ]; then
        mv "$file" "$dest/"
        echo "   ✅ $(basename "$file")"
      fi
    done
    echo ""
  else
    echo "⚠️  No se encontraron imágenes para $category"
    echo ""
  fi
}

# Mover archivos por categoría
move_files "screenshot_*" "$BASE_DIR/images/screenshots" "Screenshots (6)"
move_files "mockup_*" "$BASE_DIR/images/mockups" "Mockups (3)"
move_files "graphic_*" "$BASE_DIR/images/assets" "Graphics (4)"
move_files "banner_*" "$BASE_DIR/images/assets" "Banners"
move_files "landing_*" "$BASE_DIR/images/website" "Website (1)"
move_files "infographic_*" "$BASE_DIR/images/infographics" "Infographics (1)"
move_files "social_*" "$BASE_DIR/images/social_media" "Social Media (2)"

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  ✅ ORGANIZACIÓN COMPLETADA                                    ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Validar
echo "📊 Verificación:"
echo ""

total=0

for dir in screenshots mockups assets website infographics social_media; do
  count=$(ls -1 "$BASE_DIR/images/$dir" 2>/dev/null | wc -l)
  if [ $count -gt 0 ]; then
    echo "   ✅ $dir: $count archivos"
    total=$((total + count))
  fi
done

echo ""
echo "   📊 Total: $total/17 imágenes"
echo ""

if [ $total -eq 17 ]; then
  echo "🎉 ¡Todas las imágenes están en su lugar!"
  echo ""
  echo "📋 Próximo paso:"
  echo "   node validate_assets.js"
  echo ""
  echo "🚀 Luego haz commit:"
  echo "   git add images/"
  echo "   git commit -m \"feat(multimedia): Agregar 17 imágenes generadas con Gemini (v3.0 completo)\""
  echo ""
else
  echo "⚠️  Faltan $(expr 17 - $total) imágenes"
  echo ""
  echo "📌 Verifica que todas hayan sido descargadas en ~/Downloads/"
  echo ""
fi
