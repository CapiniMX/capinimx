#!/usr/bin/env node

/**
 * 🔍 Test de API Minimax - Debug
 * Verifica la conexión y formato correcto
 */

const https = require('https');

const API_KEY = "sk-cp-n-BB_utqUw_AARcwnWi7BQFA09vzg88Ba0WTxJLSpuQFz5ff_PBB1c2cAP10F6pgyq2mWbt152X3N lm0GuumsPrCziQJnjo-NEWbmP2pRNOeyTtyqj8BEBE";

const testPrompt = "A simple red circle on white background";

// Probar diferentes endpoints
const endpoints = [
  {
    name: 'Endpoint 1: /v1/text_to_image (con api_key en body)',
    method: 'POST',
    hostname: 'api.minimax.chat',
    path: '/v1/text_to_image',
    payload: {
      prompt: testPrompt,
      model: "image-01",
      api_key: API_KEY
    }
  },
  {
    name: 'Endpoint 2: /v1/text_to_image (sin api_key en body)',
    method: 'POST',
    hostname: 'api.minimax.chat',
    path: '/v1/text_to_image',
    payload: {
      prompt: testPrompt,
      model: "image-01"
    }
  },
  {
    name: 'Endpoint 3: /api/text_to_image',
    method: 'POST',
    hostname: 'api.minimax.chat',
    path: '/api/text_to_image',
    payload: {
      prompt: testPrompt,
      model: "image-01"
    }
  },
  {
    name: 'Endpoint 4: /v1/models/image-01/text-to-image',
    method: 'POST',
    hostname: 'api.minimax.chat',
    path: '/v1/models/image-01/text-to-image',
    payload: {
      prompt: testPrompt
    }
  }
];

async function testEndpoint(endpoint) {
  return new Promise((resolve) => {
    console.log(`\n🧪 Probando: ${endpoint.name}`);
    console.log(`   Host: ${endpoint.hostname}${endpoint.path}`);

    const payload = JSON.stringify(endpoint.payload);

    const options = {
      hostname: endpoint.hostname,
      port: 443,
      path: endpoint.path,
      method: endpoint.method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': payload.length,
        'Authorization': `Bearer ${API_KEY}`,
        'User-Agent': 'Mozilla/5.0'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log(`   📊 Status: ${res.statusCode}`);
        console.log(`   📋 Content-Type: ${res.headers['content-type']}`);

        if (data.length > 500) {
          console.log(`   📄 Response: ${data.substring(0, 200)}...`);
        } else {
          console.log(`   📄 Response: ${data}`);
        }

        if (res.statusCode === 200) {
          console.log(`   ✅ EXITOSO`);
        } else if (res.statusCode === 401) {
          console.log(`   ❌ No autorizado (API key inválida)`);
        } else if (res.statusCode === 404) {
          console.log(`   ❌ Endpoint no encontrado`);
        } else {
          console.log(`   ⚠️  Status inesperado`);
        }

        resolve();
      });
    });

    req.on('error', (err) => {
      console.log(`   ❌ Error: ${err.message}`);
      resolve();
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║  🔍 TEST DE API MINIMAX                                        ║');
  console.log('╚════════════════════════════════════════════════════════════════╝');

  console.log('\n🔑 API Key (primeros 20 caracteres):');
  console.log(`   ${API_KEY.substring(0, 20)}...`);

  console.log('\n📝 Probando diferentes endpoints:\n');

  for (const endpoint of endpoints) {
    await testEndpoint(endpoint);
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log('\n\n📋 Análisis:\n');
  console.log('✅ Si ves un endpoint con status 200 y JSON válido, ese es el correcto');
  console.log('❌ Si ves HTML en la respuesta, el endpoint está mal');
  console.log('❌ Si ves 401, la API key no es válida');
  console.log('❌ Si ves 404, el endpoint no existe\n');
}

main();
