<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AuthController extends AbstractController
{
    #[Route('/api/register', name: 'api_register', methods: ['POST'])]
    public function register(Request $request, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $user = new User();

        $user->setUsername($data['username']);

        $hashedPassword = $passwordHasher->hashPassword($user, $data['password']);
        $user->setPassword($hashedPassword);
        $user->setRoles(['ROLE_USER']);

        $em->persist($user);
        $em->flush();

        return new JsonResponse(['message' => 'User registered successfully'], Response::HTTP_CREATED);
    }

    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
    public function login(Request $request, UserRepository $userRepo, UserPasswordHasherInterface $hasher): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $username = $data['username'] ?? '';
        $password = $data['password'] ?? '';

        $user = $userRepo->findOneBy(['username' => $username]);

        if (!$user || !$hasher->isPasswordValid($user, $password)) {
            return new JsonResponse(['message' => 'Invalid credentials ❌'], Response::HTTP_UNAUTHORIZED);
        }

        // Save user ID in session
        $request->getSession()->set('user_id', $user->getId());

        return new JsonResponse([
            'message' => 'Login successful ✅',
            'user' => ['username' => $user->getUsername()]
        ]);
    }


    #[Route('/api/change-password', name: 'api_change_password', methods: ['PATCH'])]
    public function changePassword(Request $request, SessionInterface $session, EntityManagerInterface $em, UserPasswordHasherInterface $hasher, UserRepository $userRepo): JsonResponse
    {
        $userId = $session->get('user_id');
        if (!$userId) {
            return new JsonResponse(['error' => 'Not authenticated'], Response::HTTP_UNAUTHORIZED);
        }

        $user = $userRepo->find($userId);
        $data = json_decode($request->getContent(), true);

        $newPassword = $hasher->hashPassword($user, $data['new_password']);
        $user->setPassword($newPassword);
        $em->flush();

        return new JsonResponse(['message' => 'Password updated']);
    }

    #[Route('/api/delete-account', name: 'api_delete_account', methods: ['DELETE'])]
    public function deleteAccount(SessionInterface $session, EntityManagerInterface $em, UserRepository $userRepo): JsonResponse
    {
        $userId = $session->get('user_id');
        if (!$userId) {
            return new JsonResponse(['error' => 'Not authenticated'], Response::HTTP_UNAUTHORIZED);
        }

        $user = $userRepo->find($userId);
        $em->remove($user);
        $em->flush();

        $session->invalidate();

        return new JsonResponse(['message' => 'Account deleted']);
    }

    #[Route('/api/profile', name: 'api_profile', methods: ['GET'])]
    public function profile(Request $request, UserRepository $userRepo): JsonResponse
    {
        $session = $request->getSession();
        $userId = $session->get('user_id');

        if (!$userId) {
            return new JsonResponse(['message' => 'Not authenticated'], Response::HTTP_UNAUTHORIZED);
        }

        $user = $userRepo->find($userId);

        return new JsonResponse([
            'username' => $user->getUsername(),
            'roles' => $user->getRoles()
        ]);
    }

    #[Route('/api/logout', name: 'api_logout', methods: ['POST'])]
    public function logout(Request $request): JsonResponse
    {
        $request->getSession()->invalidate();

        return new JsonResponse(['message' => 'Logged out successfully ✅']);
    }


}