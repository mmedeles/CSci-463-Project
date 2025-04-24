<?php
declare(strict_types=1);

namespace App\Controller;

use App\Entity\Vehicle;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;

/*
 * This controller handles operations performed on Vehicle, i.e. Lock/Unlock, Open/Close Windows
 */
class VehicleController extends AbstractController
{
    #[Route('/api/lock', name: 'vehicle_lock', methods: ['POST'])]
    public function lockDoors(Request $request, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), associative: true);

        $vehicle = $em->getRepository(Vehicle::class)->find($data['id']);

        if (!$vehicle) {
            return new JsonResponse(['message' => 'Vehicle not found'], Response::HTTP_NOT_FOUND);
        }

        if ($vehicle->isLocked()) {
            return new JsonResponse(['message' => 'Vehicle is locked'], Response::HTTP_FORBIDDEN);
        } else {
            $vehicle->setisLocked(true);
        }

        $em->persist($vehicle);
        $em->flush();

        return new JsonResponse(['message' => 'Vehicle is locked'], Response::HTTP_OK);
    }
}