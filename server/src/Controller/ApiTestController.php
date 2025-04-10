<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ApiTestController
{
    #[Route('/api/status', name: 'api_status', methods: ['GET'])]
    public function status(): JsonResponse
    {
        return new JsonResponse([
            'status' => 'Backend is operational ✅',
            'timestamp' => (new \DateTime())->format('Y-m-d H:i:s')
        ]);
    }

    #[Route('/api/increment', name: 'api_increment', methods: ['POST'])]
    public function increment(Request $request, SessionInterface $session): JsonResponse
    {
        // Force session to start
        $session->start();

        // Get the current counter value (default 0)
        $counter = $session->get('counter', 0);

        // Increment and update it
        $counter++;
        $session->set('counter', $counter);

        return new JsonResponse([
            'message' => 'Counter incremented successfully ✅',
            'counter' => $counter,
            'timestamp' => (new \DateTime())->format('Y-m-d H:i:s'),
            'session_id' => $session->getId()

        ]);
    }

}
