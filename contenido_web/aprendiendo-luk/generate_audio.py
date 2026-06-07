#!/usr/bin/env python3
"""
Generate audio files for AprendiendoLuk using ElevenLabs
Usage: python3 generate_audio.py [--script number] [--voice voice_id] [--api-key your_key]
"""

import os
import sys
import argparse
from pathlib import Path

try:
    from elevenlabs import ElevenLabs, VoiceSettings
except ImportError:
    print("❌ ElevenLabs not installed. Install with:")
    print("   pip install elevenlabs")
    sys.exit(1)

# Audio scripts organized by category
SCRIPTS = {
    # Tutoriales
    1: {
        "name": "tutorial_suma_rapida",
        "folder": "tutoriales",
        "text": """¡Hola! Bienvenido a Suma Rápida. En este juego vas a resolver operaciones matemáticas lo más rápido que puedas.

Verás un número, un símbolo de operación, y otro número. Por ejemplo: 5 más 3.

Tu objetivo es seleccionar la respuesta correcta entre las cuatro opciones que aparecen en la pantalla. Tienes un tiempo limitado, así que ¡piensa rápido!

Cuanto más rápido respondas correctamente, más puntos ganarás. Recuerda: la velocidad y la precisión son clave.

¿Listo? ¡Empecemos a entrenar tu mente!"""
    },
    2: {
        "name": "tutorial_memoria_secuencial",
        "folder": "tutoriales",
        "text": """¡Hola! Bienvenido a Memoria Secuencial. Este es nuestro juego de memoria tipo Simón.

Verás una secuencia de colores que aparecen uno por uno. Tu tarea es observar cuidadosamente y luego repetir exactamente la misma secuencia tocando los botones de color en el orden correcto.

Al principio es fácil, con solo dos o tres colores. Pero cuidado: cada nivel que completes agregará un nuevo color a la secuencia. ¡Las cosas se ponen más desafiantes!

Tienes un número limitado de intentos, así que concéntrate y confía en tu memoria.

Cuando completes dos niveles correctamente, recibirás una sorpresa especial con confeti.

¿Preparado para desafiar tu memoria? ¡Vamos!"""
    },
    3: {
        "name": "tutorial_velocidad_visual",
        "folder": "tutoriales",
        "text": """¡Hola! Bienvenido a Velocidad Visual. Este es el juego más emocionante.

En la pantalla aparecerán números u objetos flotando. Tu objetivo es tocar solamente los elementos que cumplen con la instrucción que ves en pantalla.

Por ejemplo, si dice "Toca los números pares", debes tocar el 2, 4, 6, 8... y evitar tocar los números impares.

Otra vez podría decir "Toca los cuadrados rojos", entonces busca y toca solo esos elementos.

Tienes 30 segundos para conseguir la máxima puntuación. Cada acierto suma puntos. Cada error resta puntos.

Reacciona rápido, sé preciso, y demuestra tu velocidad visual.

¿Listo para este desafío? ¡Que comience!"""
    },
    # Celebraciones
    4: {
        "name": "celebration_excellent",
        "folder": "celebraciones",
        "text": """¡Excelente respuesta! Muy bien, ¡sigue así! Tu mente está en forma hoy."""
    },
    5: {
        "name": "celebration_level_complete",
        "folder": "celebraciones",
        "text": """¡Nivel completado! ¡Increíble! Pasaste a un nuevo nivel. La secuencia está creciendo, pero tú también eres más fuerte. ¡Vamos!"""
    },
    6: {
        "name": "celebration_session_win",
        "folder": "celebraciones",
        "text": """¡Felicidades! ¡Completaste toda la sesión!

Acabas de jugar tres juegos diferentes y entrenaste tu mente en velocidad, memoria y precisión.

Tu puntuación total es excelente. Sigue practicando y mejorarás cada día.

¡Eres increíble! Vuelve mañana para otro entrenamiento."""
    },
    # Motivación
    7: {
        "name": "motivation_try_again",
        "folder": "motivacion",
        "text": """No te preocupes, esa no fue. Todos cometemos errores. Lo importante es intentar de nuevo. ¡Vamos, tú puedes!"""
    },
    8: {
        "name": "motivation_keep_going",
        "folder": "motivacion",
        "text": """Este nivel está siendo desafiante, ¿verdad? Eso significa que tu cerebro está creciendo.

Sigue intentando. Cada intento te hace más fuerte y más rápido.

¡No te rindas! Estás muy cerca de lograrlo."""
    },
    9: {
        "name": "motivation_session_low",
        "folder": "motivacion",
        "text": """Completaste la sesión, y eso es lo importante.

Hoy quizás no fue tu mejor día, pero mañana será diferente.

Recuerda: entrenar la mente es como entrenar el cuerpo. Necesita consistencia y práctica.

¡Vuelve mañana y verás cómo mejoras!"""
    },
    # Instrucciones
    10: {
        "name": "intro_welcome",
        "folder": "instrucciones",
        "text": """Bienvenido a AprendiendoLuk. Aquí entrenarás tu mente con tres juegos desafiantes que desarrollarán tu velocidad mental, memoria y precisión visual.

Cada sesión consta de tres juegos diferentes. Puedes elegir tu nivel de dificultad: Fácil, Medio o Difícil.

¿Listo para entrenar? Selecciona un juego y elige tu dificultad.

¡Que comience el entrenamiento!"""
    },
    11: {
        "name": "difficulty_selection",
        "folder": "instrucciones",
        "text": """Ahora elige tu nivel de dificultad.

Fácil: Perfecto si es tu primer intento. Tiempos generosos y operaciones simples.

Medio: Un buen desafío. Tiempos más cortos y operaciones un poco más complejas.

Difícil: Para los campeones. Tiempos muy cortos y máxima dificultad.

¿Cuál escoges? Recuerda: siempre puedes intentar otro nivel después."""
    },
    12: {
        "name": "session_start",
        "folder": "instrucciones",
        "text": """¡Perfectamente! Tu sesión ha comenzado.

Vas a jugar tres juegos diferentes en este orden:

Primero: uno elegido al azar.
Segundo: otro diferente.
Tercero: el último.

Tu puntuación se acumulará a través de los tres juegos.

¿Listo? ¡Que comience el primer juego!"""
    },
}

# Voice configurations for different script types
VOICE_CONFIGS = {
    "tutoriales": {
        "voice_id": "EXAVITQu4vr4xnSDxMaL",  # Sarah - clara y joven
        "stability": 0.7,
        "similarity_boost": 0.85,
    },
    "celebraciones": {
        "voice_id": "EXAVITQu4vr4xnSDxMaL",  # Sarah - energética
        "stability": 0.6,
        "similarity_boost": 0.85,
    },
    "motivacion": {
        "voice_id": "EXAVITQu4vr4xnSDxMaL",  # Sarah - empática
        "stability": 0.75,
        "similarity_boost": 0.85,
    },
    "instrucciones": {
        "voice_id": "EXAVITQu4vr4xnSDxMaL",  # Sarah - clara
        "stability": 0.8,
        "similarity_boost": 0.85,
    },
}

def generate_audio(script_num, voice_id=None, api_key=None):
    """Generate a single audio file"""

    if script_num not in SCRIPTS:
        print(f"❌ Script {script_num} not found. Available: 1-12")
        return False

    script = SCRIPTS[script_num]
    folder = script["folder"]

    # Get API key
    if not api_key:
        api_key = os.getenv("ELEVENLABS_API_KEY")
        if not api_key:
            print("❌ No API key found. Set ELEVENLABS_API_KEY or use --api-key")
            return False

    # Initialize client
    try:
        client = ElevenLabs(api_key=api_key)
    except Exception as e:
        print(f"❌ Failed to initialize ElevenLabs: {e}")
        return False

    # Get voice config
    config = VOICE_CONFIGS.get(folder, VOICE_CONFIGS["instrucciones"])
    if voice_id:
        config["voice_id"] = voice_id

    # Output path
    output_dir = Path(f"audio/{folder}")
    output_dir.mkdir(parents=True, exist_ok=True)
    output_file = output_dir / f"{script['name']}.mp3"

    print(f"\n📊 Generating: {script['name']}.mp3")
    print(f"   Category: {folder}")
    print(f"   Voice ID: {config['voice_id']}")
    print(f"   Output: {output_file}")
    print(f"   Status: Generating...")

    try:
        # Generate audio
        audio = client.text_to_speech.convert(
            text=script["text"],
            voice_id=config["voice_id"],
            model_id="eleven_multilingual_v2",
            voice_settings={
                "stability": config["stability"],
                "similarity_boost": config["similarity_boost"],
            }
        )

        # Save to file
        with open(output_file, "wb") as f:
            for chunk in audio:
                f.write(chunk)

        # Verify file was created
        file_size = output_file.stat().st_size
        file_size_mb = file_size / (1024 * 1024)

        print(f"   ✅ Complete!")
        print(f"   📁 File size: {file_size_mb:.2f} MB")
        print(f"   ✓ Saved to: {output_file}")
        return True

    except Exception as e:
        print(f"   ❌ Error: {e}")
        return False

def list_scripts():
    """List all available scripts"""
    print("\n📚 Available Scripts:\n")
    for num, script in sorted(SCRIPTS.items()):
        print(f"   {num:2d}. {script['name']:40} ({script['folder']})")

def main():
    parser = argparse.ArgumentParser(
        description="Generate audio files for AprendiendoLuk",
        epilog="Example: python3 generate_audio.py --script 1 --api-key your_key"
    )
    parser.add_argument(
        "--script",
        type=int,
        help="Script number (1-12) or 'all' for all scripts"
    )
    parser.add_argument(
        "--voice",
        help="Voice ID to use"
    )
    parser.add_argument(
        "--api-key",
        help="ElevenLabs API key (or set ELEVENLABS_API_KEY)"
    )
    parser.add_argument(
        "--list",
        action="store_true",
        help="List all available scripts"
    )

    args = parser.parse_args()

    if args.list:
        list_scripts()
        return

    if not args.script:
        print("❌ Please specify --script number or --list to see available scripts")
        print("   Example: python3 generate_audio.py --script 1")
        print("   Example: python3 generate_audio.py --list")
        return

    # Generate requested script(s)
    if args.script == 1:
        # First script
        success = generate_audio(1, args.voice, args.api_key)
        if success:
            print("\n✅ First audio generated successfully!")
            print("\n📋 Next steps:")
            print("   1. Download the remaining 12 scripts using:")
            print("      python3 generate_audio.py --script 2")
            print("      python3 generate_audio.py --script 3")
            print("      etc...")
            print("   2. Or generate all at once:")
            print("      for i in {1..12}; do python3 generate_audio.py --script $i; done")
            print("   3. Validate with: node validate_assets.js")
    else:
        success = generate_audio(args.script, args.voice, args.api_key)
        if success:
            print(f"\n✅ Script {args.script} generated successfully!")

if __name__ == "__main__":
    main()
