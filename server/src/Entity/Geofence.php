<?php

namespace App\Entity;

use App\Repository\GeofenceRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GeofenceRepository::class)]
class Geofence
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'geofences')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Location $centerPoint = null;

    #[ORM\Column]
    private ?float $radius = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getCenterPoint(): ?Location
    {
        return $this->centerPoint;
    }

    public function setCenterPoint(?Location $centerPoint): static
    {
        $this->centerPoint = $centerPoint;

        return $this;
    }

    public function getRadius(): ?float
    {
        return $this->radius;
    }

    public function setRadius(float $radius): static
    {
        $this->radius = $radius;

        return $this;
    }
}
