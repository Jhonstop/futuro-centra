
import { useState } from "react";
import { useParams } from "react-router-dom";
import MarketplaceNav from "@/components/MarketplaceNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Truck, Shield, Clock, Package, ChevronRight, FileText, MessageCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for product detail
const mockProductDetail = {
  id: 1,
  name: "Ácido Sulfúrico Industrial (H2SO4) Grau Técnico 98%",
  description: "Ácido sulfúrico industrial de alta pureza (98%) para aplicações industriais, incluindo processamento químico, tratamento de água, manufatura de fertilizantes e produção de detergentes. Disponível em diferentes volumes com certificação de qualidade e rastreabilidade completa.",
  supplier: "Química Global",
  supplierVerified: true,
  supplierSince: "2015",
  supplierLocation: "São Paulo, SP",
  supplierResponseRate: "98%",
  supplierResponseTime: "< 24h",
  price: 1250.00,
  minOrder: 100,
  unit: "litros",
  bulkPricing: [
    { quantity: 100, price: 1250.00 },
    { quantity: 500, price: 1150.00 },
    { quantity: 1000, price: 1050.00 }
  ],
  images: [
    "https://images.unsplash.com/photo-1616069531665-0ce5ce2ab8c1?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1581092921461-39b9d007dfb9?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3"
  ],
  rating: 4.8,
  reviews: 124,
  specifications: [
    { name: "Concentração", value: "98% ± 0,5%" },
    { name: "Densidade", value: "1,84 g/cm³" },
    { name: "Aparência", value: "Líquido claro a levemente amarelado" },
    { name: "Impurezas", value: "< 0,02%" },
    { name: "Embalagem", value: "Tambores de 200L ou IBC de 1000L" },
    { name: "Prazo de Validade", value: "24 meses" },
    { name: "Certificações", value: "ISO 9001, REACH, RoHS" }
  ],
  category: "Indústria Química",
  subcategory: "Reagentes",
  applications: [
    "Produção de fertilizantes",
    "Tratamento de metais",
    "Refino de petróleo",
    "Tratamento de água e efluentes",
    "Produção de baterias",
    "Síntese de compostos orgânicos"
  ],
  shippingInfo: {
    options: [
      { method: "Rodoviário", time: "2-5 dias úteis", areas: "Sul e Sudeste" },
      { method: "Aéreo", time: "1-3 dias úteis", areas: "Todo o Brasil" }
    ],
    details: "Produto classificado como carga perigosa. Transporte realizado em conformidade com a resolução ANTT 5947."
  },
  certifications: ["ISO 9001", "ISO 14001", "REACH", "RoHS"],
  relatedProducts: [
    { id: 9, name: "Ácido Clorídrico 37%", price: 890.00 },
    { id: 10, name: "Hidróxido de Sódio em Escamas", price: 780.00 },
    { id: 11, name: "Ácido Nítrico 65%", price: 1100.00 }
  ]
};

const ProductDetail = () => {
  const { id } = useParams();
  // In a real app, we would fetch the product details based on the ID
  const product = mockProductDetail;
  
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="min-h-screen flex flex-col">
      <MarketplaceNav />
      
      <main className="flex-1 container py-8">
        <div className="text-sm breadcrumbs mb-6">
          <span className="text-muted-foreground">
            {product.category} / {product.subcategory} / {product.name}
          </span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <div className="aspect-video overflow-hidden rounded-lg border">
              <img 
                src={mainImage} 
                alt={product.name} 
                className="w-full h-full object-contain bg-white p-4"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`w-20 h-20 rounded border cursor-pointer flex-shrink-0 ${mainImage === image ? 'border-centra-blue-primary' : ''}`}
                  onClick={() => setMainImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - imagem ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Product Tabs */}
            <Tabs defaultValue="description" className="mt-8">
              <TabsList className="w-full">
                <TabsTrigger value="description" className="flex-1">Descrição</TabsTrigger>
                <TabsTrigger value="specifications" className="flex-1">Especificações</TabsTrigger>
                <TabsTrigger value="shipping" className="flex-1">Envio</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <h2 className="text-xl font-semibold mb-4">Descrição do Produto</h2>
                <p className="text-muted-foreground">{product.description}</p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Aplicações</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {product.applications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Certificações</h3>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50">{cert}</Badge>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="pt-4">
                <h2 className="text-xl font-semibold mb-4">Especificações Técnicas</h2>
                <div className="border rounded-md overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-muted/50' : ''}>
                          <td className="py-3 px-4 border-b font-medium">{spec.name}</td>
                          <td className="py-3 px-4 border-b text-muted-foreground">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="pt-4">
                <h2 className="text-xl font-semibold mb-4">Informações de Envio</h2>
                <div className="space-y-4">
                  <div className="rounded-md border overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="py-3 px-4 text-left">Método</th>
                          <th className="py-3 px-4 text-left">Prazo Estimado</th>
                          <th className="py-3 px-4 text-left">Regiões Atendidas</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.shippingInfo.options.map((option, index) => (
                          <tr key={index} className="border-t">
                            <td className="py-3 px-4">{option.method}</td>
                            <td className="py-3 px-4">{option.time}</td>
                            <td className="py-3 px-4">{option.areas}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      <strong>Importante:</strong> {product.shippingInfo.details}
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Product Info and Purchase */}
          <div className="col-span-1">
            <div className="sticky top-20">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h1 className="text-2xl font-bold leading-tight">{product.name}</h1>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 font-medium">{product.rating}</span>
                      </div>
                      <span className="mx-1 text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{product.reviews} avaliações</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-bold text-2xl text-centra-blue-primary">
                      R$ {product.price.toLocaleString('pt-BR')}
                      <span className="text-sm font-normal text-muted-foreground ml-1">
                        / {product.unit}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Pedido mínimo: {product.minOrder} {product.unit}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Preços por volume</h3>
                    <table className="w-full text-sm">
                      <tbody>
                        {product.bulkPricing.map((tier, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                            <td className="py-2 px-3 rounded-l-md">{tier.quantity}+ {product.unit}</td>
                            <td className="py-2 px-3 text-right font-medium rounded-r-md">
                              R$ {tier.price.toLocaleString('pt-BR')} / {product.unit}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-centra-blue-primary hover:bg-centra-blue-primary/90 h-12 text-base">
                      Solicitar Cotação
                    </Button>
                    <Button variant="outline" className="w-full h-12 text-base">
                      Contatar Fornecedor
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-centra-blue-light rounded-full flex items-center justify-center text-centra-blue-primary font-bold text-lg">
                      {product.supplier.substring(0, 2)}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex items-center">
                        <h3 className="font-medium">{product.supplier}</h3>
                        {product.supplierVerified && (
                          <Badge variant="outline" className="ml-2 flex items-center gap-1 text-xs bg-green-50 text-green-700 border-green-200">
                            <Check className="h-3 w-3" /> Verificado
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Membro desde {product.supplierSince}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex">
                      <Truck className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{product.supplierLocation}</span>
                    </div>
                    <div className="flex">
                      <MessageCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Taxa de resposta: {product.supplierResponseRate}</span>
                    </div>
                    <div className="flex">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Tempo de resposta: {product.supplierResponseTime}</span>
                    </div>
                    <div className="flex">
                      <Shield className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Transação Segura Centra</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="outline" className="w-full text-sm">
                      Ver Perfil do Fornecedor
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">Produtos Relacionados</h3>
                <div className="space-y-3">
                  {product.relatedProducts.map((relatedProduct) => (
                    <a key={relatedProduct.id} href={`/product/${relatedProduct.id}`} className="block">
                      <Card className="hover:bg-muted/30 transition-colors">
                        <CardContent className="p-3 flex justify-between items-center">
                          <div>
                            <div className="font-medium text-sm">{relatedProduct.name}</div>
                            <div className="text-centra-blue-primary text-sm">
                              R$ {relatedProduct.price.toLocaleString('pt-BR')}
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="mt-auto border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © 2024 Centra. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
