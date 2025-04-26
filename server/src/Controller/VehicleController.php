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
    #[Route('/api/toggleLock', name: 'vehicle_lock', methods: ['POST'])]
    public function toggleLock(Request $request, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), associative: true);
        $returnMessage = '';
        $vehicle = $em->getRepository(Vehicle::class)->find($data['id']);


        if (!$vehicle) {
            return new JsonResponse(['message' => 'Vehicle not found'], Response::HTTP_NOT_FOUND);
        }

        if ($vehicle->isLocked()) {
            $vehicle->setisLocked(false);
            $returnMessage = 'Vehicle is unlocked';
        } else {
            $vehicle->setisLocked(true);
            $returnMessage = 'Vehicle is locked';
        }

        $em->persist($vehicle);
        $em->flush();

        return new JsonResponse(['message' => $returnMessage], Response::HTTP_OK);
    }
}