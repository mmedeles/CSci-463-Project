<?php

namespace App\Entity;

use App\Repository\LocationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LocationRepository::class)]
class Location
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?float $latitude = null;

    #[ORM\Column(nullable: true)]
    private ?float $longitude = null;

    /**
     * @var Collection<int, Geofence>
     */
    #[ORM\OneToMany(targetEntity: Geofence::class, mappedBy: 'centerPoint', orphanRemoval: true)]
    private Collection $geofences;

    public function __construct()
    {
        $this->geofences = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getLatitude(): ?float
    {
        return $this->latitude;
    }

    public function setLatitude(?float $latitude): static
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?float
    {
        return $this->longitude;
    }

    public function setLongitude(?float $longitude): static
    {
        $this->longitude = $longitude;

        return $this;
    }

    /**
     * @return Collection<int, Geofence>
     */
    public function getGeofences(): Collection
    {
        return $this->geofences;
    }

    public function addGeofence(Geofence $geofence): static
    {
        if (!$this->geofences->contains($geofence)) {
            $this->geofences->add($geofence);
            $geofence->setCenterPoint($this);
        }

        return $this;
    }

    public function removeGeofence(Geofence $geofence): static
    {
        if ($this->geofences->removeElement($geofence)) {
            // set the owning side to null (unless already changed)
            if ($geofence->getCenterPoint() === $this) {
                $geofence->setCenterPoint(null);
            }
        }

        return $this;
    }
}
