
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Upload, Plus, X } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Esquema de validação para o formulário de empresa
const companySchema = z.object({
  name: z.string().min(2, "Nome da empresa deve ter pelo menos 2 caracteres"),
  cnpj: z.string().min(14, "CNPJ deve ter 14 números").max(18, "CNPJ deve ter no máximo 18 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  address: z.string().min(5, "Endereço deve ter pelo menos 5 caracteres"),
  city: z.string().min(2, "Cidade deve ter pelo menos 2 caracteres"),
  state: z.string().min(2, "Estado deve ter pelo menos 2 caracteres"),
  segment: z.string().min(2, "Segmento deve ter pelo menos 2 caracteres"),
});

type CompanyFormValues = z.infer<typeof companySchema>;

// Template para importação em massa
const TEMPLATE_CSV = `nome,cnpj,email,telefone,endereco,cidade,estado,segmento
Empresa A,12345678000190,empresa_a@example.com,1199998888,Rua A 123,São Paulo,SP,Indústria
Empresa B,98765432000110,empresa_b@example.com,1199997777,Rua B 456,Rio de Janeiro,RJ,Comércio`;

const CompanyRegistration = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [csvData, setCsvData] = useState<Array<CompanyFormValues>>([]);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [companies, setCompanies] = useState<Array<CompanyFormValues>>([]);
  const [mode, setMode] = useState<'single' | 'batch'>('single');
  
  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      cnpj: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      segment: "",
    },
  });

  // Função para lidar com envio individual de empresa
  const onSubmit = async (data: CompanyFormValues) => {
    setIsLoading(true);
    try {
      // Aqui você implementaria a lógica real de registro no centraplace.com.br
      // Simulation da API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Adiciona a empresa à lista local
      setCompanies(prev => [...prev, data]);
      
      toast({
        title: "Empresa registrada com sucesso",
        description: `${data.name} foi adicionada ao seu cadastro`,
      });
      
      form.reset();
    } catch (error) {
      console.error("Erro ao registrar empresa:", error);
      toast({
        title: "Erro ao registrar empresa",
        description: "Ocorreu um erro ao tentar registrar a empresa. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Função para processar upload de CSV
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      
      // Processar o CSV
      const lines = content.split('\n');
      const headers = lines[0].split(',');
      
      const parsedData = lines.slice(1).map(line => {
        const values = line.split(',');
        const company: any = {};
        
        headers.forEach((header, index) => {
          const value = values[index]?.trim();
          switch(header.trim()) {
            case 'nome':
              company.name = value;
              break;
            case 'cnpj':
              company.cnpj = value;
              break;
            case 'email':
              company.email = value;
              break;
            case 'telefone':
              company.phone = value;
              break;
            case 'endereco':
              company.address = value;
              break;
            case 'cidade':
              company.city = value;
              break;
            case 'estado':
              company.state = value;
              break;
            case 'segmento':
              company.segment = value;
              break;
          }
        });
        
        return company;
      }).filter(company => company.name && company.cnpj);
      
      setCsvData(parsedData);
      setIsFileUploaded(true);
      
      toast({
        title: "Arquivo processado",
        description: `${parsedData.length} empresas encontradas no arquivo.`,
      });
    };
    
    reader.readAsText(file);
  };

  // Função para processar lote de empresas
  const handleBatchRegistration = async () => {
    if (csvData.length === 0) {
      toast({
        title: "Nenhum dado para processar",
        description: "Faça o upload de um arquivo CSV válido primeiro.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    let successCount = 0;
    let failCount = 0;
    
    for (const company of csvData) {
      try {
        // Aqui você implementaria a lógica real de registro no centraplace.com.br
        // Simulation da API call
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Adiciona a empresa à lista local
        setCompanies(prev => [...prev, company]);
        successCount++;
      } catch (error) {
        console.error(`Erro ao registrar ${company.name}:`, error);
        failCount++;
      }
    }
    
    setIsLoading(false);
    setCsvData([]);
    setIsFileUploaded(false);
    
    toast({
      title: "Processamento concluído",
      description: `${successCount} empresas registradas com sucesso. ${failCount} falhas.`,
      variant: successCount > 0 ? "default" : "destructive",
    });
  };

  // Função para baixar o modelo de CSV
  const downloadTemplate = () => {
    const element = document.createElement("a");
    const file = new Blob([TEMPLATE_CSV], {type: 'text/csv'});
    element.href = URL.createObjectURL(file);
    element.download = "template_empresas.csv";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Função para remover uma empresa da lista
  const removeCompany = (index: number) => {
    setCompanies(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 py-24 bg-gradient-to-b from-centra-light/50 to-white">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Automação de Registro de Empresas
            </h1>
            <p className="text-lg text-centra-dark/80 mb-6">
              Adicione empresas ao seu cadastro individualmente ou através de importação em lote.
            </p>
            
            {/* Seletor de modo */}
            <div className="flex space-x-4 mb-8">
              <Button 
                variant={mode === 'single' ? "default" : "outline"} 
                onClick={() => setMode('single')}
              >
                Cadastro Individual
              </Button>
              <Button 
                variant={mode === 'batch' ? "default" : "outline"} 
                onClick={() => setMode('batch')}
              >
                Importação em Lote
              </Button>
            </div>
            
            {mode === 'single' ? (
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Cadastro Individual de Empresa</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome da Empresa</FormLabel>
                            <FormControl>
                              <Input placeholder="Nome da empresa" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="cnpj"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CNPJ</FormLabel>
                            <FormControl>
                              <Input placeholder="00.000.000/0000-00" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="email@empresa.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input placeholder="(00) 00000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Endereço</FormLabel>
                            <FormControl>
                              <Input placeholder="Endereço completo" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cidade</FormLabel>
                              <FormControl>
                                <Input placeholder="Cidade" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Estado</FormLabel>
                              <FormControl>
                                <Input placeholder="UF" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="segment"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Segmento</FormLabel>
                            <FormControl>
                              <Input placeholder="Segmento de atuação" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary text-white"
                    >
                      {isLoading ? "Processando..." : "Registrar Empresa"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Importação em Lote</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="csv-file" className="mb-2 block">Arquivo CSV</Label>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <Input 
                          id="csv-file"
                          type="file" 
                          accept=".csv"
                          onChange={handleFileUpload}
                          className="cursor-pointer"
                        />
                      </div>
                      <Button 
                        variant="outline"
                        onClick={downloadTemplate}
                        className="whitespace-nowrap"
                      >
                        Baixar Modelo
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      O arquivo deve seguir o padrão do modelo disponível para download.
                    </p>
                  </div>
                  
                  {isFileUploaded && csvData.length > 0 && (
                    <div>
                      <h3 className="text-lg font-medium mb-3">Dados Carregados</h3>
                      <div className="border rounded-md overflow-auto max-h-60">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CNPJ</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cidade/UF</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {csvData.map((company, index) => (
                              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="px-3 py-2 text-sm">{company.name}</td>
                                <td className="px-3 py-2 text-sm">{company.cnpj}</td>
                                <td className="px-3 py-2 text-sm">{company.email}</td>
                                <td className="px-3 py-2 text-sm">{company.city}/{company.state}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    onClick={handleBatchRegistration}
                    disabled={isLoading || !isFileUploaded || csvData.length === 0}
                    className="w-full bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary text-white"
                  >
                    {isLoading ? (
                      <>Processando...</>
                    ) : (
                      <>
                        Importar {csvData.length} Empresas
                        <Upload className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
            
            {/* Lista de empresas cadastradas */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-4">
                Empresas Cadastradas ({companies.length})
              </h2>
              
              {companies.length > 0 ? (
                <div className="border rounded-md overflow-hidden bg-white">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CNPJ</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Segmento</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Localização</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {companies.map((company, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-sm">{company.name}</td>
                          <td className="px-4 py-3 text-sm">{company.cnpj}</td>
                          <td className="px-4 py-3 text-sm">{company.email}</td>
                          <td className="px-4 py-3 text-sm">{company.segment}</td>
                          <td className="px-4 py-3 text-sm">{company.city}/{company.state}</td>
                          <td className="px-4 py-3 text-right">
                            <Button variant="ghost" size="sm" onClick={() => removeCompany(index)}>
                              <X className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-10 border rounded-md bg-gray-50">
                  <p className="text-gray-500">Nenhuma empresa cadastrada ainda.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {mode === 'batch' ? setMode('single') : null}}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Empresa
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyRegistration;
